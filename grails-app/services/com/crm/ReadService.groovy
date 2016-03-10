package com.crm

import reactor.spring.context.annotation.Consumer
import reactor.spring.context.annotation.Selector

/**
 * Created by tm1c14 on 10/03/2016.
 */
@Consumer
class ReadService {

    @Selector("book.list")
    public void getList(List<String> books ) {
        println "Get list called"
        books.each {
            println "The list is ${it}"
            Thread.sleep(2000)
        }
    }
}
