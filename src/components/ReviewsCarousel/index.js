import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewsList: props.reviewsList,
      shownId: props.reviewsList[0].id,
    }
  }

  leftArrow = () => {
    const {shownId} = this.state
    if (shownId !== 0) {
      this.setState(prevState => ({shownId: prevState.shownId - 1}))
    }
  }

  rightArrow = () => {
    const {reviewsList, shownId} = this.state
    const reviewsListLen = reviewsList.length
    if (shownId !== reviewsListLen - 1) {
      this.setState(prevState => ({shownId: prevState.shownId + 1}))
    }
  }

  render() {
    const {reviewsList, shownId} = this.state
    const filteredReview = reviewsList[shownId]

    return (
      <div className="bg-container">
        <div className="card">
          <h1> Reviews</h1>
          <img src={filteredReview.imgUrl} alt={filteredReview.username} />
          <div className="arrows-container">
            <button
              className="leftArrow"
              type="button"
              onClick={this.leftArrow}
              data-testid="leftArrow"
            >
              {' '}
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />{' '}
            </button>
            <p className="username"> {filteredReview.username} </p>
            <button
              className="rightArrow"
              type="button"
              onClick={this.rightArrow}
              data-testid="rightArrow"
            >
              {' '}
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />{' '}
            </button>
          </div>
          <p className="company-name"> {filteredReview.companyName} </p>
          <p className="review-description"> {filteredReview.description} </p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
