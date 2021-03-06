import React from 'react';
import CardsMainCardPreview from './CardsMainCardPreview';
import CardsMainDesign from './CardsMainDesign';
import CardsMainFill from './CardsMainFill';
import CardsMainShare from './CardsMainShare';
import PropTypes from 'prop-types';

const CardsMain = props => {
  const {
    userData,
    handleOptionChange,
    handleCollapsable,
    collapsablesId,
    changePreview,
    handleReset,
    updateImage,
    isImageDefault,
    getUrl,
    cardUrl,
    isSend,
    errors
  } = props;

  return (
    <main className="cards__main">
      <form
        className="form__all-sections form__section-fill"
      >
        <CardsMainCardPreview
          userData={userData}
          handleReset={handleReset} />

        <div className="form__wrapper">
          <CardsMainDesign
            handleOptionChange={handleOptionChange}
            handleCollapsable={handleCollapsable}
            collapsablesId={collapsablesId}
            palette={userData.palette}
          />

          <CardsMainFill
            changePreview={changePreview}
            handleCollapsable={handleCollapsable}
            collapsablesId={collapsablesId}
            userData={userData}
            updateImage={updateImage}
            isImageDefault={isImageDefault}
            errors={errors}
          />

          <CardsMainShare
            handleCollapsable={handleCollapsable}
            collapsablesId={collapsablesId}
            userData={userData}
            getUrl={getUrl}
            cardUrl={cardUrl}
            isSend={isSend}
          />

        </div>
      </form>
    </main>
  );
}

CardsMain.propTypes = {
  userData: PropTypes.object.isRequired,
  changePreview: PropTypes.func.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  handleCollapsable: PropTypes.func.isRequired,
  collapsablesId: PropTypes.string,
  handleReset: PropTypes.func.isRequired,
  updateImage: PropTypes.func.isRequired,
  isImageDefault: PropTypes.bool.isRequired,
  getUrl: PropTypes.func.isRequired,
  cardUrl: PropTypes.string,
  isSend: PropTypes.bool.isRequired,
  errors: PropTypes.objectOf(PropTypes.string)
};

export default CardsMain;
