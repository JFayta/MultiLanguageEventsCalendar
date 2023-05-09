/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import location    from '@salesforce/label/c.asi_ReleaseEvent_location';
import description from '@salesforce/label/c.asi_ReleaseEvent_description';
import close       from '@salesforce/label/c.asi_ReleaseEvent_close';
import moreinfo    from '@salesforce/label/c.asi_ReleaseEvent_moreinfo';

asi_ReleaseEvent_moreinfo
import { LightningElement, api, track } from 'lwc';

export default class CceventDetailsModal extends LightningElement {

    label = {location, description, close, moreinfo};

    @api event;

    @api 
    get eventDetailSectionSize()
    {
        return (this.event !== undefined && this.event.eventImageURL !== undefined && this.event.eventImageURL !== null && this.event.eventImageURL.trim() !== '') ? '8' : '12' ;
    }

    connectedCallback()
    {
        if(this.event !== undefined && this.event !== null)
        {
            this.event = JSON.parse(JSON.stringify(this.event));

        }
    }

    handleCloseDetailsModal(e)
    {
        e.preventDefault();
        const closeModalDetailsEvent = new CustomEvent('closedetailsmodalevent');
        this.dispatchEvent(closeModalDetailsEvent);
    }

}