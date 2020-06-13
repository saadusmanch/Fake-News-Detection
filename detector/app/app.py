from flask import Flask, render_template, request, jsonify
import scrape
from predictor import get_prediction

app = Flask(__name__,
            static_folder = "./static",
            template_folder = "./templates")


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/ajax', methods = ['GET', 'POST'])
def ajax_detector():
    if request.method == 'POST':
        url = request.json
        result = get_prediction(url['url'])
        title = result[0]
        prediction = result[1]
        result = {'title' : title, 'tag' : prediction}
        return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
