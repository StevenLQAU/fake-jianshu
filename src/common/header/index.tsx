import * as React from 'react'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Addition, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchInfo, SearchInfoItem, SearchInfoList, SearchInfoSwitch, SearchInfoTitle, SearchWrapper } from './style'

interface IHeaderProps {
  focused?: boolean;
  list: string[];
  handleInputFocus: () => {};
  handleInputBlur: () => {};
}

class Header extends React.Component<IHeaderProps> {

  public getListArea = () => {
    const { focused, list} = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            Popular Search
              <SearchInfoSwitch>Change</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { list.map((item)=>{
              return (
                <SearchInfoItem key={item}>{item}</SearchInfoItem>
              )
            })}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  public render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
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
              timeout={200}
              in={focused}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition >
          <Button className='writting'><i className="iconfont">&#xe608;</i>Create Article</Button>
          <Button className='join'>Join</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header','list'])
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getGetList())
      dispatch(actionCreators.getFocusSearch());
    },
    handleInputBlur() {
      const action = actionCreators.getBlurSearch();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header as any);