export const Settings = {
    id: "av-keybindings",
    keybindingsAction: {
        toggleAudio: "toggle-audio",
        toggleVideo: "toggle-video",
        mutePeers: "mute-peers",
        disableVideo: "disable-video",
    },
};

export const registerSettings = function () {
    game.keybindings.register(Settings.id, Settings.keybindingsAction.toggleAudio, {
        name: "KEYBINDINGS.ToggleAudio",
        editable: [{key: "KeyA", modifiers: [KeyboardManager.MODIFIER_KEYS.ALT]}],
        onDown: () => _triggerUiAction(Settings.keybindingsAction.toggleAudio),
    });

    game.keybindings.register(Settings.id, Settings.keybindingsAction.toggleVideo, {
        name: "KEYBINDINGS.ToggleVideo",
        editable: [{key: "KeyV", modifiers: [KeyboardManager.MODIFIER_KEYS.ALT]}],
        onDown: () => _triggerUiAction(Settings.keybindingsAction.toggleVideo),
    });

    game.keybindings.register(Settings.id, Settings.keybindingsAction.mutePeers, {
        name: "KEYBINDINGS.MutePeers",
        editable: [{key: "KeyA", modifiers: [KeyboardManager.MODIFIER_KEYS.SHIFT, KeyboardManager.MODIFIER_KEYS.ALT]}],
        onDown: () => _triggerUiAction(Settings.keybindingsAction.mutePeers),
    });

    game.keybindings.register(Settings.id, Settings.keybindingsAction.disableVideo, {
        name: "KEYBINDINGS.DisableVideo",
        editable: [{key: "KeyV", modifiers: [KeyboardManager.MODIFIER_KEYS.SHIFT, KeyboardManager.MODIFIER_KEYS.ALT]}],
        onDown: () => _triggerUiAction(Settings.keybindingsAction.disableVideo),
    });
}

function _triggerUiAction(action) {
    ui.webrtc.element.find(`[data-action="${action}"]`).click();

    return true;
}
