package com.crm

import grails.artefact.Enhances
import org.grails.core.artefact.ControllerArtefactHandler

/**
 * Created by thandomafela on 29/02/16.
 */
//  @Enhances(ControllerArtefactHandler.TYPE)
trait TraitSCC {

    def springSecurityService

    def currentUsername() {
        springSecurityService.principal?.username
    }
}