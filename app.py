# app.py

from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"


# if this is the main thread of execution first load the model and then start the server
if __name__ == "__main__":
    print(("* Loading Keras model and Flask starting server..."
    "please wait until server has fully started"))
    # host='0.0.0.0' parameter makes the server accessible from external IPs.
    app.run(host='0.0.0.0', threaded=False,port=8201)
