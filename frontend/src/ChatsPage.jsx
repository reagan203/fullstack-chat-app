import PropTypes from 'prop-types';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'b0ffec11-fe4c-4430-b2e6-a576eb41c06c', // project id
        props.user.username, // username from props
        props.user.secret // secret from props
    );

    return (
        <div style={{ height: '100vh' }}>
            <MultiChatWindow {...chatProps} />
            <MultiChatSocket {...chatProps} style={{ height: '100%' }} />
        </div>
    );
};

// Define PropTypes
ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired, // Ensure username is provided and is a string
        secret: PropTypes.string.isRequired,   // Ensure secret is provided and is a string
    }).isRequired,
};

export default ChatsPage;
