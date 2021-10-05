import { LightningElement, api } from 'lwc';

export default class CvIcon extends LightningElement {
    @api isLinkedin = false;
    @api isFacebook = false;
    @api isSalesforce = false;
    get none() {
        return !this.isLinkedin && !this.isFacebook && !this.isSalesforce;
    }
}
