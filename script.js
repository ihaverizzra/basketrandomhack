class KeyMirror {
    constructor() {
        this.isPressed = false;
        this.setupMirroring();
    }

    createKeyboardEvent(type) {
        return new KeyboardEvent(type, {
            key: 'w',
            code: 'KeyW',
            keyCode: 87,
            bubbles: true,
            cancelable: true
        });
    }

    setupMirroring() {
       
        document.addEventListener('keydown', (e) => {
            if (e.code === 'ArrowUp' && !this.isPressed) {
                this.isPressed = true;
                console.log('Arrow Up pressed - Mirroring to W key');
                document.dispatchEvent(this.createKeyboardEvent('keydown'));
            }
        });

        
        document.addEventListener('keyup', (e) => {
            if (e.code === 'ArrowUp' && this.isPressed) {
                this.isPressed = false;
                console.log('Arrow Up released - Releasing W key');
                document.dispatchEvent(this.createKeyboardEvent('keyup'));
            }
        });
    }
}


const keyMirror = new KeyMirror();
console.log('Ready! Press the UP arrow key and it will automatically mirror to the W key.');
