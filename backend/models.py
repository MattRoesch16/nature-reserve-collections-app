from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from uuid import uuid4

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class Users(db.Model):
    __tablename__ = "USER"
    Userid = db.Column(db.String(32), primary_key=True, unique=True, nullable = False, default = get_uuid())
    UserName = db.Column(db.String(50), unique=True, nullable=False)
    Email = db.Column(db.String(345), unique=True, nullable = False)
    Password = db.Column(db.Text, nullable=False)
    
class Locations(db.Model):
    __tablename__ = "LOCATION"
    Locationid = db.Column(db.Integer, primary_key=True, unique=True, nullable = False)
    LocationName = db.Column(db.String(100), unique=True, nullable=False)
    MapImage = db.Column(db.Text, unique=True, nullable=False)
    Description = db.Column(db.Text, unique=False, nullable=False)


#Animals/Pictures Below

class Animals(db.Model):
    __tablename__ = "ANIMAL"
    Animalid = db.Column(db.Integer, primary_key=True, unique=True, nullable=False)
    CommonName = db.Column(db.String(100), unique=True, nullable=False)
    SpeciesName = db.Column(db.String(100), unique=True, nullable=False)
    Image = db.Column(db.Text, unique=True, nullable=False)
    Type = db.Column(db.String(50), unique=False, nullable=False)
    Description = db.Column(db.Text, unique=False, nullable=False)

class Tags(db.Model):
    __tablename__ = "TAG"
    Tagid = db.Column(db.Integer, primary_key=True, unique=True, nullable=False)
    TagName = db.Column(db.String(20), unique=True, nullable=False)

class MyPictures(db.Model):
    __tablename__ = "MYPICTURE"
    Pictureid = db.Column(db.Integer, primary_key=True, unique=True, nullable=False)
    DateTaken = db.Column(db.String(10), unique=False, nullable=False)
    Notes = db.Column(db.Text, unique=False, nullable=True)

class Animal_Identifiers(db.Model):
    __tablename__ = "ANIMAL_IDENTIFIER"
    Animalid = db.Column(db.Integer, db.ForeignKey('ANIMAL.Animalid'), primary_key=True, nullable=False)
    IntAnimalTag = db.relationship("Animals", backref=db.backref("ANIMAL", uselist=False))
    Tagid = db.Column(db.Integer, db.ForeignKey('TAG.Tagid'), primary_key=True, nullable=False)
    IntTag = db.relationship("Tags", backref=db.backref("TAG", uselist=False))

class Animal_Pictures(db.Model):
    __tablename__ = "ANIMAL_PICTURE"
    Animalid = db.Column(db.Integer, db.ForeignKey('ANIMAL.Animalid'), primary_key=True, nullable=False)
    IntAnimalPic = db.relationship("Animals", backref=db.backref("ANIMALPIC", uselist=False))
    Pictureid = db.Column(db.Integer, db.ForeignKey('MYPICTURE.Pictureid'), primary_key=True, nullable=False)
    IntPicture = db.relationship("MyPictures", backref=db.backref("MYPICTURE", uselist=False))

