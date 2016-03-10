package com.crm

import grails.async.DelegateAsync

/**
 * Created by tm1c14 on 10/03/2016.
 */

class AsyncBookService {
    @DelegateAsync
    BookService bookService

}
