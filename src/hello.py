# hello.py

import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

bp = Blueprint('hello', __name__, url_prefix='/hello')

@bp.route("/", methods=['GET'])
def hello():
    """
    example:
    $ http localhost:8201/hello/
    """
    import os
    buf = []
    for a in os.environ:
        if a.startswith('AWS_') or a.startswith('npm_'): continue
        buf.append("> "+a+"="+os.getenv(a))
    return "Hello Lemon!" + "\r\n" + "\n".join(buf)


@bp.route("/<string:id>", methods=['GET'])
def getHello(id):
    """
    example:
    $ http localhost:8201/hello/1
    """
    return "Hello ID:"+id
