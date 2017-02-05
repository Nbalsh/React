class MessagesView extends React.Component {

    render() {
        return(
            <FluxComponent connectToStores={{
                messages: store => {{
                    messages: store.messages
                }}
            }}>
            <MessageList />
            </FluxComponent>
        );
    }
}