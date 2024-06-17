import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { ListDivider, ListItemDecorator, MenuItem, Typography } from '@mui/joy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { MAX_CONVERSATIONS, useChatStore } from '~/common/state/store-chats';
import { useApplicationBarStore } from '~/common/layouts/appbar/store-applicationbar';
import { useUIPreferencesStore } from '~/common/state/store-ui';

import { ConversationItem } from './ConversationItem';


export function ConversationItems(props: {
  conversationId: string | null
  onDeleteAllConversations: () => void,
  onImportConversation: () => void,
}) {

  // external state
  const conversationIDs = useChatStore(state => state.conversations.map(
    conversation => conversation.id,
  ), shallow);
  const { setActiveConversationId, deleteConversation } = useChatStore(state => ({
    setActiveConversationId: state.setActiveConversationId,
    deleteConversation: state.deleteConversation,
  }), shallow);
  const { showSymbols } = useUIPreferencesStore(state => ({
    showSymbols: state.zenMode !== 'cleaner',
  }), shallow);


  const hasChats = conversationIDs.length > 0;
  const singleChat = conversationIDs.length === 1;
  const maxReached = conversationIDs.length >= MAX_CONVERSATIONS;

  const closeAppMenu = () => useApplicationBarStore.getState().setAppMenuAnchor(null);

  const handleConversationActivate = React.useCallback((conversationId: string) => {
    setActiveConversationId(conversationId);
    closeAppMenu();
  }, [setActiveConversationId]);

  const handleConversationDelete = React.useCallback((conversationId: string) => {
    if (!singleChat && conversationId)
      deleteConversation(conversationId);
  }, [deleteConversation, singleChat]);

  return <>

    {conversationIDs.map(conversationId =>
      <ConversationItem
        key={'c-id-' + conversationId}
        conversationId={conversationId}
        isActive={conversationId === props.conversationId}
        isSingle={singleChat}
        showSymbols={showSymbols}
        conversationActivate={handleConversationActivate}
        conversationDelete={handleConversationDelete}
      />)}
    
    <ListDivider />

    <MenuItem disabled={!hasChats} onClick={props.onDeleteAllConversations}>
      <ListItemDecorator><DeleteOutlineIcon /></ListItemDecorator>
      <Typography>
        Delete all
      </Typography>
    </MenuItem>

  </>;
}