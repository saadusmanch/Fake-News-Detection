import praw
import pandas as pd
import datetime as dt
from config import configs


def post_data(url):
    """
    This function scrapes the Reddit post using PRAW and reddit API
    And returns a list contaning the required information of the post.
    """
    reddit = praw.Reddit(client_id=configs['client_id'], \
                        client_secret=configs['client_secret'], \
                        user_agent=configs['user_agent'], \
                        username=configs['username'], \
                        password=configs['password'])

    try:
        submission = reddit.submission(url=url)
    except praw.exceptions.InvalidURL:
        return -1

    title = submission.title
    upvote_ratio = submission.upvote_ratio
    domain_url = submission.url
    comment_list = []

    submission.comments.replace_more(limit=0)
    for comment in submission.comments.list():
        body = comment.body.split()
        body = ' '.join(body)
        comment_list.append(body)
    final_list = []
    final_list.append(title)
    final_list.append(upvote_ratio)
    final_list.append(domain_url)
    final_list.append(comment_list)

    return final_list


if __name__ == "__main__":
    print("Reddit Post Scraper")
    print("acbd")
