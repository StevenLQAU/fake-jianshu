import * as React from 'react'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Addition, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper } from './style'

interface IHeaderProps {
  focused?: boolean;
  handleInputFocus: () => {};
  handleInputBlur: () => {};
}

const Header = (props: IHeaderProps) => {
  return (
    <HeaderWrapper>
      <Logo>
        HAHA
        </Logo>
      <Nav>
        <NavItem className='left active'>Index</NavItem>
        <NavItem className='left'>Download App</NavItem>
        <NavItem className='right'>Login</NavItem>
        <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
        <SearchWrapper>
          <CSSTransition
            timeout={100000}
            in={props.focused}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            />
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</i>
        </SearchWrapper>
      </Nav>
      <Addition >
        <Button className='writting'><i className="iconfont">&#xe608;</i>Create Article</Button>
        <Button className='join'>Join</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state: any) => {
  return {
    focused: state.header.focused
  }

}

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleInputFocus() {
      const action = actionCreators.getFocusSearch();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.getBlurSearch();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header as any);