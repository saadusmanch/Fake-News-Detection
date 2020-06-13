import scrape
import feature
import pickle
from sklearn.tree import DecisionTreeClassifier
import scipy
from sklearn.preprocessing import MinMaxScaler
import os
import numpy as np


fileDir = os.path.dirname(os.path.realpath('__file__'))
os.chdir(fileDir)

def get_prediction(url):
    """
    This function returns the title and prediction of the Reddit URL provided.
    """
    # Scrapted Data
    data = scrape.post_data(url)

    # Invalid URL entered
    if data == -1:
        print("Invalid URL")
        return ("", "Invalid URL")

    title = data[0]
    upvote_ratio = data[1]
    domain_url = data[2]
    comment_list = data[3]

    # Get Post Sentiment
    post_sentiment = feature.post_sentiment(title)
    # Get Comment Sentiment
    comment_sentiment = 0
    count = 0
    for comment in comment_list:
        comment_sentiment += feature.post_sentiment(comment)
        count += 1
    # Get Average of the comments
    if count > 1:
        comment_sentiment = comment_sentiment / count

    # Get Alexa Ranking 
    domain_rank = feature.get_rank(domain_url)

    # Load the Model back from file
    filename = "pickle/model_pickle.pkl"
    with open(filename, 'rb') as file:  
        pickled_model = pickle.load(file)
    file.close()

    # Load the MinMaxScaler Object from the file
    filename = "pickle/scaler.pkl"
    with open(filename, 'rb') as file:  
        scaler = pickle.load(file)
    file.close()

    # X-values
    X_test = [[comment_sentiment, post_sentiment, domain_rank, upvote_ratio]]
    print(X_test)

    X_test = scaler.transform(X_test)
    prediction =  pickled_model.predict(X_test)
    prediction = int(prediction[0])
    if prediction == 1:
        tag = "True"
    else:
        tag = "False"
    
    # Return title and prediction tag
    return title, tag


if __name__ == "__main__":
    print("Predictor")
    get_prediction("https://www.reddit.com/r/nottheonion/comments/gxtabs/bollywood_actors_called_out_for_protesting_racism/")
