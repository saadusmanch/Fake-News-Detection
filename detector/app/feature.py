from nltk import tokenize
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import re
from urllib.parse import urlparse
import os
import zipfile
import pickle

fileDir = os.path.dirname(os.path.realpath('__file__'))
os.chdir(fileDir)


def get_rank(url):
    """
    This function takes URL of the website and returns the alexa ranking
    """
    ''' getrank returns the alexa rank of the domain of the given URL, or -1 if it is over 1M'''
    parsed_url = urlparse(url)
    if parsed_url.scheme == '':
        return get_rank('http://'+url)

    filename = "pickle/rank_list.pkl"
    with open(filename, 'rb') as file:  
        domain_list = pickle.load(file)
    file.close()
    domain = parsed_url.netloc
    domain = re.sub('^www\.', '', domain)
    if domain in domain_list:
        return domain_list.index(domain)+1   
    return 1000001
        

def post_sentiment(post):
    """
    This function returns the post sentiment using Vader Sentiment Analysis
    """
    analyser = SentimentIntensityAnalyzer()
    sentiment_score = analyser.polarity_scores(post)["compound"]
    return sentiment_score
