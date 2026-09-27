Plugin.register('jiggle_bones', {
    title: 'Jiggle Bones',
    author: 'dangeroushiveplugs0-dev',
    description: 'Bone chain spring dynamics for secondary motion.',
    icon: 'animation',
    version: '0.1.0',
    variant: 'both',

    onload() {
        console.log('Jiggle Bones loaded');
    },

    onunload() {
        console.log('Jiggle Bones unloaded');
    }
});
