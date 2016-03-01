import com.crm.Role
import com.crm.User
import com.crm.UserRole

class BootStrap {

    def init = { servletContext ->

        def userRole = new Role('ROLE_USER').save()

        def me = new User('me@sergiodelamo.com', 'groovycalamari').save()

        UserRole.create me, userRole

        UserRole.withSession {
            it.flush()
            it.clear()
        }

    }
    def destroy = {
    }
}
