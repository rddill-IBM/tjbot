/*
User-specific configuration
    ** IMPORTANT NOTE ********************
    * Please ensure you do not interchange your username and password.
    * Hint: Your username is the lengthy value ~ 36 digits including a hyphen
    * Hint: Your password is the smaller value ~ 12 characters
*/ 

exports.conversationWorkspaceId = 'd74cdd52-b85d-4aaa-986e-2c8c13a6e014'; // replace with the workspace identifier of your conversation

// Create the credentials object for export
exports.credentials = {};
exports.tj ={"name":"Bob"};
// Watson Conversation
// https://www.ibm.com/watson/developercloud/conversation.html
exports.credentials.conversation = {
	"password": "WrZDlznOViNy",
	"username": "083609b3-91ed-4a44-aab8-593c22cd3ded"
};

// Watson Speech to Text
// https://www.ibm.com/watson/developercloud/speech-to-text.html
exports.credentials.speech_to_text = {
	"url": "https://stream.watsonplatform.net/speech-to-text/api",
	"password": "sWdnrc1R4cGK",
	"username": "3c0d19b6-287e-4224-99a3-5c6ab3b3041d"
  };

// Watson Text to Speech
// https://www.ibm.com/watson/developercloud/text-to-speech.html
exports.credentials.text_to_speech = {
	"url": "https://stream.watsonplatform.net/text-to-speech/api",
	"password": "xiy6ocK0NE1I",
	"username": "6c878674-ed6a-48b1-a30c-bb6c7218b619"
  };
