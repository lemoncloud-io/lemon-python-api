# hello.py

import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

from flask import jsonify, abort

bp = Blueprint('hello', __name__, url_prefix='/hello')

@bp.route("/", methods=['GET'])
def hello():
    """
    example:
    $ http :8201/hello/
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
    $ http :8201/hello/1
    """
    return "Hello ID:"+id

@bp.route("/<int:id>", methods=['PUT'])
def putHello(id):
    """
    - req/res by json

    example:
    $ echo '{"a":1}' | http PUT ':8201/hello/1?name=lemon'
    """
    mth = request.method                                                # must be PUT
    cty = request.content_type                                          # must be 'application/json'
    cec = request.content_encoding                                      # must be None
    # jsn = request.get_json(force=False, silent=False, cache=True)       # parse input as json.
    jsn = request.json
    err = None

    # name = request.form['name']           # post parameter
    name = request.args['name']             # url parameter (see http://flask.pocoo.org/docs/1.0/api/#flask.Request)    
    err = 'Unknown Error'

    print("Hello ID:%d - %s %s / %s %s <- %s"%(id, mth, name, cty, cec, jsonify(jsn)))
    
    # return "Hello ID:%d - %s %s / %s %s <- %s"%(id, mth, name, cty, cec, jsonify(jsn))
    # abort(404, "Post id {0} doesn't exist.".format(id))
    return jsonify(name=name, method=mth, type=cty, input=jsn)          # response as json.
