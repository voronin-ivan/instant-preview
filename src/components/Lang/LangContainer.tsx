import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Lang, LangProps } from './Lang';
import { change } from '../../redux/actions/lang';
import { RootState } from '../../models/root';

const mapStateToProps = (state: RootState): Partial<LangProps> => ({
    lang: state.lang,
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<LangProps> => (
    bindActionCreators({
        changeLang: change,
    }, dispatch)
);

export const LangContainer = connect(mapStateToProps, mapDispatchToProps)(Lang);
