package com.crm

/**
 * Created by thandomafela on 29/02/16.
 */
class HomeController {

    def index() {
        def model = [success: true, message: 'You can accss a protected resource']
        render model
    }

    def form() {

    }
}
