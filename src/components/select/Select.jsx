import { Component } from 'react';
import './Select.scss';

class Select extends Component {

  state = {
    displayActiveText: "",
    showOptionList: false
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.clickOutOption);
    this.setState({
      displayActiveText: this.props.displayActiveText
    })
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickOutOption);
  }

  onToggleListDisplay = () => {
    this.setState(prevState => ({
      showOptionList: !prevState.showOptionList
    }));
  }

  onSelectOption = (e) => {
    this.setState({
      displayActiveText: e.target.getAttribute('data-name')
    })
  }

  clickOutOption = (e) => {
    if (!e.target.classList.contains('select__text') &&
      !e.target.classList.contains('select__option')) {
      this.setState({
        showOptionList: false
      })
    }
  }




  render() {
    const { displayActiveText, showOptionList } = this.state;
    const { optionList } = this.props;

    return (
      <div className='select'>
        <div
          className={showOptionList ? 'select__text select__text_active' : 'select__text'}
          onClick={this.onToggleListDisplay}
        >
          {displayActiveText}
        </div>
        {
          showOptionList && (
            <ul className='select__options'>
              {optionList.map(option => (
                <li
                  className={displayActiveText === option ? 'select__option select__option_active' : 'select__option'}
                  key={option}
                  data-name={option}
                  onClick={this.onSelectOption}
                >
                  {option}
                </li>
              ))}
            </ul>
          )
        }
      </div>
    )
  }
}



export default Select;