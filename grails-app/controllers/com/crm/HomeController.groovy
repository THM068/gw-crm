package com.crm

import grails.async.Promise
import  static grails.async.Promises.*
/**
 * Created by thandomafela on 29/02/16.
 */
class HomeController {
    def bookService

    def index() {
        def model = [success: true, message: 'You can accss a protected resource']

        def p1 = task {
            println callMe()
        }

        onComplete([p1] ) { List results ->
            println results[0];
        }

        bookService.getBooks()
        println "Bookservice called ....."
        println "Promise code above called ...."
        render model
    }

    def form() {

    }

    private String  callMe() {
        Thread.sleep(10000);
        println "Dude I have slept too much"
        return "I have been called ..."
    }
}
