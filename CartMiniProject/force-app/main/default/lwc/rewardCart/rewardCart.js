import { LightningElement, api, track } from 'lwc';

export default class RewardCart extends LightningElement {
    @api cartQuantity = 0;
    @api cartItem = 'Default Item';
    @api cartUrl = 'Basic Link';
}