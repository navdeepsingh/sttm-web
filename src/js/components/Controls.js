import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ControlsSettings from "../components/ControlsSettings/ControlsSettings";

import ShareButtons, { supportedMedia as _s } from './ShareButtons';
import {
  setSgBaaniLength,
  setFontSize,
  setTranslationFontSize,
  setTransliterationFontSize,
  setLineHeight,
  setTranslationLanguages,
  setSteekLanguages,
  setEnglishTranslationLanguages,
  setHindiTranslationLanguages,
  setTransliterationLanguages,
  setLarivaarAssistStrength,
  resetDisplayOptions,
  resetFontOptions,
  toggleAdvancedOptions,
  toggleLarivaarAssistOption,
  toggleLarivaarOption,
  toggleTranslationOptions,
  toggleTransliterationOptions,
  toggleSettingsPanel,
  toggleSplitViewOption,
  toggleDarkMode,
  toggleSehajPaathMode,
  toggleAutoScrollMode,
  toggleParagraphMode,
  toggleVisraams,
  setVisraamSource,
  setVisraamStyle,
  changeFont,
  toggleCenterAlignOption,
  closeSettingsPanel,
  closeMultiViewPanel,
} from '@/features/actions';


export const supportedMedia = _s;

class Controls extends React.Component {
  constructor(props) {
    super(props);

    this.setRef = this.setRef.bind(this);
    this.settingsRef = React.createRef();
  }

  state = {
    showBorder: false,
    showControls: true
  };

  static propTypes = {
    showSettingsPanel: PropTypes.bool,
  };

  setRef = node => (this.wrapperRef = node);

  render() {
    const { showSettingsPanel } = this.props;

    return (
      <>
        <ShareButtons {...this.props} />        
        <div ref={this.settingsRef} className={`settings-panel ${showSettingsPanel ? 'settings-show' : ''}`}>
          {showSettingsPanel && <ControlsSettings settingsRef={this.settingsRef} {...this.props} />}
        </div>
      </>
    );
  }
}

// TODO: Take exactly what we need.
const mapStateToProps = (state) => state

const mapDispatchToProps = {
  setFontSize,
  setTranslationFontSize,
  setTransliterationFontSize,
  setTranslationLanguages,
  setTransliterationLanguages,
  setSteekLanguages,
  setEnglishTranslationLanguages,
  setHindiTranslationLanguages,
  setLarivaarAssistStrength,
  setSgBaaniLength,
  resetDisplayOptions,
  resetFontOptions,
  toggleAdvancedOptions,
  toggleLarivaarAssistOption,
  toggleLarivaarOption,
  toggleTranslationOptions,
  toggleTransliterationOptions,
  toggleSettingsPanel,
  toggleSplitViewOption,
  toggleParagraphMode,
  toggleSehajPaathMode,
  toggleDarkMode,
  toggleAutoScrollMode,
  toggleVisraams,
  setLineHeight,
  setVisraamSource,
  setVisraamStyle,
  changeFont,
  toggleCenterAlignOption,
  closeSettingsPanel,
  closeMultiViewPanel,
};

// TODO: Connect individual components instead of all controls.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
