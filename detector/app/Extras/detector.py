from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

dectector_page = Blueprint('sample_page', 'sample_page', template_folder='templates')


@dectector_page.route('/detector')
def get_detector():
    try:
        return render_template('index.html')
    except TemplateNotFound:
        abort(404)