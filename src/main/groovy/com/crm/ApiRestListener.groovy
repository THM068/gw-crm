package com.crm

import grails.plugin.springsecurity.rest.RestTokenCreationEvent
import org.springframework.context.ApplicationListener

/**
 * Created by thandomafela on 01/03/16.
 */
class ApiRestListener implements ApplicationListener<RestTokenCreationEvent> {

    @Override
    void onApplicationEvent(RestTokenCreationEvent restTokenCreationEvent) {
        println("token created .......")
    }
}
