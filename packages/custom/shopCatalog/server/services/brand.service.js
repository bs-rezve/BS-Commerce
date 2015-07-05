'use strict';

var mongoose = require('mongoose'),
    Brand = mongoose.model('Brand'),
    //_ = require('lodash'),
    Q = require('q');

exports.getBrands = function(req, res){
    var deferred = Q.defer();

    Brand.find({})
            .exec(function(error, brands){
                if(error){
                    return deferred.reject(error);
                }
                return deferred.resolve(brands);
            });

    return deferred.promise;
};

exports.getBrandById = function(id){
    var deferred = Q.defer();

    Brand.findOne({_id: id})
        .exec(function(error, brand){
            if(error){
                return deferred.reject(error);
            }
            return deferred.resolve(brand);
        });

    return deferred.promise;
};

exports.update = function(id, brand){
    var deferred = Q.defer();

    Brand.update({_id: id}, brand, {upsert: true}, function(error){
        if (error) {
            return deferred.reject(error);
        } else {
            return deferred.resolve(brand);
        }
    });

    return deferred.promise;
};

exports.deleteBrandById = function(id){
    var deferred = Q.defer();
    Brand.findByIdAndRemove(id, function(error, doc){
        if(error) {
            return deferred.reject(error);
        }
        return deferred.resolve(doc);
    });

    return deferred.promise;

};