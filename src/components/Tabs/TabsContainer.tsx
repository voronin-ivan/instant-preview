import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Tabs, TabsProps } from './Tabs';
import { change } from '../../redux/actions/lang';
import { RootModel } from '../../models/root';

const mapStateToProps = (state: RootModel): Partial<TabsProps> => ({
    lang: state.lang,
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<TabsProps> => (
    bindActionCreators({
        changeLang: change,
    }, dispatch)
);

export const TabsContainer = connect(mapStateToProps, mapDispatchToProps)(Tabs);
