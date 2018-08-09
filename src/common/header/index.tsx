import * as React from 'react'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import * as ActionCreator from '../../store/actionCreator';
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


// export class Header extends React.Component<IHeaderProps> {

//   constructor(props: any) {
//     super(props);
//   }


//   public render() {
//     return (
//       <HeaderWrapper>
//         <Logo>
//           HAHA
//         </Logo>
//         <Nav>
//           <NavItem className='left active'>Index</NavItem>
//           <NavItem className='left'>Download App</NavItem>
//           <NavItem className='right'>Login</NavItem>
//           <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
//           <SearchWrapper>
//             <CSSTransition
//               timeout={100000}
//               in={this.props.focused}
//               classNames="slide"
//             >
//               <NavSearch
//                 className={this.props.focused ? 'focused' : ''}
//                 onFocus={this.props.handleInputFocus}
//                 onBlur={this.props.handleInputBlur}
//               />
//             </CSSTransition>
//             <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</i>
//           </SearchWrapper>
//         </Nav>
//         <Addition >
//           <Button className='writting'><i className="iconfont">&#xe608;</i>Create Article</Button>
//           <Button className='join'>Join</Button>
//         </Addition>
//       </HeaderWrapper>
//     )
//   }
// }

const mapStateToProps = (state: any) => {
  return {
    focused: state.focused
  }

}

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleInputFocus() {
      const action = ActionCreator.getFocusSearch();
      dispatch(action);
    },
    handleInputBlur() {
      const action = ActionCreator.getBlurSearch();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header as any);