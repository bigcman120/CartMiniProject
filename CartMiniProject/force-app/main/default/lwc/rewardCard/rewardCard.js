import { LightningElement, api, track } from 'lwc';

export default class RewardCard extends LightningElement {
    @api itemImgUrl;
    @api itemTitle;
    @track itemQuantity = 0;

    handlePlus(){
        if (this.itemQuantity < 99){
            this.itemQuantity = this.itemQuantity + 1;
        }
        this.handleDisable();
    }

    handleMinus(){
        if(this.itemQuantity > 0){
            this.itemQuantity = this.itemQuantity - 1;
        }
        this.handleDisable();
    }

    handleSubmit(){
        if (this.itemQuantity < 1){return;}
        const checkoutEvent = new CustomEvent('checkout', {detail: {
                                                                    Title: this.itemTitle,
                                                                    Link: this.itemImgUrl,
                                                                    Quantity: this.itemQuantity}
        });
        this.dispatchEvent(checkoutEvent);
        this.itemQuantity = 0;
    }
}