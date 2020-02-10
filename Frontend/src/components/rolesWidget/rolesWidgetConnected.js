import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {getRoles, getShowAllRoles, getRolesCount, getFullName} from '../../store/detail/selectors'
import {toggleShowAllRoles} from '../../store/detail/actions'

import RolesWidget from './rolesWidget'

const mapStateToProps = createStructuredSelector({
  rolesGroups: getRoles,
  showAll: getShowAllRoles,
	rolesCount: getRolesCount,
	fullname: getFullName,
})

export default connect(mapStateToProps, {toggleShowAllRoles})(RolesWidget);