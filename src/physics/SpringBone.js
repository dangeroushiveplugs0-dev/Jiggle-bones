export class SpringBone {
    constructor(bone, settings = {}) {
        this.bone = bone;
        this.velocity = 0;
        this.position = 0;

        this.stiffness = settings.stiffness ?? 0.2;
        this.damping = settings.damping ?? 0.8;
    }

    update(target, delta) {
        const force = (target - this.position) * this.stiffness;
        this.velocity += force * delta;
        this.velocity *= this.damping;
        this.position += this.velocity * delta;

        return this.position;
    }
}
