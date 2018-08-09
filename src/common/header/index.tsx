import * as React from 'react'
import {CSSTransition} from 'react-transition-group';
import {Addition, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper} from './style'


export class Header extends React.Component {

  constructor(props: any){
    super(props);
    this.state = { 
      focused: false
    }
  }

  public handleInputFocus = () => {
    this.setState({
      focused: true
    })
  }

  public handleInputBlur = () => {
    this.setState({
      focused: false
    })
  }

  public render() {
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
              in={(this.state as any).focused}
              classNames="slide"
            >
            <NavSearch  
              className={(this.state as any).focused? 'focused' : ''}
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
            />
            </CSSTransition>
            <i className={(this.state as any).focused? 'focused iconfont' : 'iconfont'}>&#xe623;</i>       
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