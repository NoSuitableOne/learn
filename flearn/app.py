#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask import Flask, render_template, request
# from flask_wtf import Form
# from wtforms import StringField, SubmitField
# from wtforms.validators import Required

app = Flask(__name__)
app.config['SECRET_KEY'] = 'haha'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/user/<name>')
def user(name):
    return render_template('user.html', name=name)


@app.route('/login', methods=['post'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    return render_template('login_success.html', username=username, password=password)


@app.errorhandler(404)
def internal_server_error(e):
    return render_template('404.html')

if __name__ == '__main__':
    app.run(debug=True)
