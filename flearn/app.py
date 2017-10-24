#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/user/<name>')
def user(name):
    return render_template('user.html', name=name)


@app.errorhandler(404)
def internal_server_error(e):
    return render_template('404.html')

if __name__ == '__main__':
    app.run(debug=True)
