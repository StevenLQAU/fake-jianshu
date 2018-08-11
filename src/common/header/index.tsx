import * as React from 'react'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Addition, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchInfo, SearchInfoItem, SearchInfoList, SearchInfoSwitch, SearchInfoTitle, SearchWrapper } from './style'

interface IHeaderProps {
  focused?: boolean;
  list: any;
  page: number;
  mouseIn: boolean;
  totalPage: number;
  handleInputFocus: (list: any) => {};
  handleInputBlur: () => {};
  handleMouseEnter: () => {};
  handleMouseLeave: () => {};
  handleChangePage: (page: number, totalPage: number, spinIcon: any) => {};
}

class Header extends React.Component<IHeaderProps> {
  public spinIcon: any;

  public getListArea = () => {
    const { focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage, mouseIn } = this.props;
    const jsList = list.toJS();
    const pageList = [];
    if (jsList && jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (!jsList[i]) {
          break;
        }
        pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>);
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            Popular Search
              {/*tslint:disable-next-line:jsx-no-lambda */}
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe746;</i>Change
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  public render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
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
                // tslint:disable-next-line:jsx-no-lambda
                onFocus={() => { handleInputFocus(list) }}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe623;</i>
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
    mouseIn: state.getIn(['header', 'mouseIn']),
    // tslint:disable-next-line:object-literal-sort-keys
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleInputFocus(list: any) {
      if(!(list && list.length > 0)) {
        dispatch(actionCreators.getGetList())
      }
      dispatch(actionCreators.getFocusSearch());
    },
    handleInputBlur() {
      const action = actionCreators.getBlurSearch();
      dispatch(action);
    },
    handleMouseEnter() {
      dispatch(actionCreators.getSetMouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.getSetMouseLeave());
    },
    handleChangePage(page: number, totalPage: number, spinIcon: any) {

      let originAngle: any = spinIcon.style.transform.replace(/[^0-9]/ig, '');

      if (originAngle) {
        // tslint:disable-next-line:radix
        originAngle = parseInt(originAngle);
      } else {
        originAngle = 0;
      }
      spinIcon.style.transform = `rotate(${(originAngle as number) + 360}deg)`;

      // tslint:disable-next-line:no-console
      console.log(originAngle);

      if (page < totalPage) {
        dispatch(actionCreators.getChangePage(page + 1));
      } else {
        dispatch(actionCreators.getChangePage(1));
      }

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header as any);