package com.crm

import grails.transaction.Transactional

@Transactional
class BookService {

   public List<String> getBooks() {
       def  list = ['Tracking Book', 'Pure adventure', 'Love on a mountain']
       notify("book.list", list)
       return list
   }
}
