import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  filterPipe = new FilterPipe();
  title = 'angular-text-search-highlight';
  public platformList2: any[] = [];
  public platformList = new Set<string>();
  public searchIsOn: boolean = false;
  searchSettings = [];
  public inputSearchSettings = [];
  categories: any[] = [];
  platformSettings = [];

  searchText = '';
  filteredData = '';
  searchOriginalSettings: any[];

  platformFilter = [];

  data = [
    {
      "category": "Modem",
      "query": "What is the diffence between CM1X and P&CM Modem?",
      "reply": "<img src='../../../assets/images/answer.bmp' style='width: 100%'>",
      "meta" : "Connectivity Module"
    },
    {
      "category": "Modem",
      "query": "Why do use the terminology CM1X?",
      "reply": "Because we have two variants of Modem: With Internal Antenna (CM100) &amp; With External Antenna (CM110)"
    },
    {
      "category": "Internet",
      "query": "Will CM1X although designed to work with 4G, with still work in regions wherein ISPs don’t offer 4G services?",
      "reply": "Yes, CM1X will work with 2G, 3G or LTE (4G) but with subordinate performance and lower speed and with slower data transmission"
    },
    {
      "category": "Machines",
      "query": "How is the Fuel Consumption monitoried for CAN &amp; non-CAN\nMachines?",
      "reply": "We can monitor the fuel consumption only for the CAN Machines. <br /> For non-CAN Machines, as we receive only analog signals, we will report only Fuel Level on the\nCustomer Subscription as it is not possible to report Fuel Consumption."
    },
    {
      "category": "Modem",
      "query": "Is it possible for Dealer or customer to swap Modems between Machines?",
      "reply": "No, they don’t because not allowed by CNHi, if someone will do the exchange the modem will be “backlisted” and not reconfigured."
    },
    {
      "category": "Bosch Telematics",
      "query": "Why did we disconnect BOSCH Portal?",
      "reply": "They discontinued their Product Line related to Telematics"
    },
    {
      "category": "Bosch Telematics",
      "query": "What is the solution for existing BOSCH Customers?",
      "reply": "They will gradually need to graduate to the new Telematics"
    },
    {
      "category": "Modem",
      "query": "Which machines will be fitted with CM1X?",
      "reply": "As of now, all machines in 2023 are planned to rolled-out with CM1X Telematics -Except 450DX"
    },
    {
      "category": "Subscription",
      "query": "What is the subscription cost for 2nd and third year?&nbsp;",
      "reply": "We are yet to decide on this, but the &nbsp;approximate cost will $80-$90 per annum. <br/> We will come up with an attractive plan"
    },
    {
      "category": "Mobile Application",
      "query": "Will there be a Mobile Application for Customers?",
      "reply": "Yes, we are planning to have the same launched by end of 2023"
    },
    {
      "category": "Benefits",
      "query": "How will the customer benefit?",
      "reply": "<ul> <li> Equipment Utilization </li><li>Idle Time </li> <li>Fuel Reporting </li> <li>Preventive Maintenance Management</li><li>Equipment location (for operational dispatch, service\/repair\/theft prevention)</li><li>Equipment availability for jobs</li> <li>Pre and Post Inspection gaps and deficiencies, and manual processes</li> <li>Confirmation of asset use and location, i.e. change orders, billable work stoppage</li>"
    },
    {
      "category": "Benefits",
      "query": "Can the benefits be converted into currency ?",
      "reply": "It has been proven in the real-world that Telematics can bring-in additional revenue related to Parts and Service and also gain customer loyalty due to increased touch points. For CNH, it will all depend on the seriousness and intensity with which we educate our dealer and end-customer on the features of Telematics."
    },
    {
      "category": "Customer Portal",
      "query": "If customer wants his machine not visible, what to do ?",
      "reply": "The customer can see his machine in SiteWatch and will have a choice to enable or disable the machine on SiteWatch. <BR> However, the machine will be visible to dealer and CNH Industrial even though the SiteWatch subscription is not renewed."
    },
    {
      "category": "SMS",
      "query": "Will the customer get an SMS. if any abnormality ?",
      "reply": "We can setup alarms and alerts through mails and not through SMS."
    },
    {
      "category": "Benefits",
      "query": "How will the dealer get benefitted from telematics ?",
      "reply": "<ul><li>The dealer organizations that engage and actively participate with Telematics see greater opportunities and recognize greater profit </li><li>Increased customer touch points</li><li>More efficient rental fleet monitoring and billing</li><li>Maintenance alerts and more efficient scheduling</li><li>Reduced data collection costs</li><li>More efficient troubleshooting</li><li>Opportunity to up-sell and showcase new products</li><li>Increased parts sales</li><li>Increased service department revenue</li><li>Higher machine resale with documented care</li><li>Increased customer satisfaction</li></ul>"},
    {
      "category": "Modem",
      "query": "Will Telematics work in remote area ?",
      "reply": "Yes, provided we have internet connectivity in the remote area. If the internet connectivity is not there, then the data will be stored in Modem and the data will be transmitted as soon as the machine shifts to the location where the internet connection is active."
    },
    {
      "category": "Modem",
      "query": "What is the battery back-up time for the Modem <br> or <br> For how much time the Modem (CM1x) will track the machine without Machine Ignition switched on ?",
      "reply": "The current setup is 30 days with 1 wake up/day."
    }];


  ngOnInit() {
    this.searchOriginalSettings = this.data;
    this.categories = [...new Set(this.data.map(item => item.category))];
    console.log(this.categories);

    for (let category of this.categories) {
      this.platformFilter.push({ "name": category, "selected": false })
    }
  }

  public onSearchOrders(searchKey: string): void {
    // this.platformList.clear();
    // this.platformFilter.forEach(item => item.selected = false);
    const trimmedKeyLowerCase: string = searchKey.toLowerCase();
    console.log("searchkey ", searchKey);

    if (searchKey) {
      console.log(this.searchSettings);
      console.log(this.platformSettings);
      console.log(this.searchIsOn);
      if (this.searchIsOn) {
        console.log("here1");
        if (this.platformSettings.length == 0) this.searchSettings = this.data;
        this.searchSettings = Object.values(this.searchSettings)
          .filter((item) => item.query.toLowerCase().includes(trimmedKeyLowerCase)
          || item.reply.toLowerCase().includes(trimmedKeyLowerCase)
          || item.meta?.toLowerCase().includes(trimmedKeyLowerCase));
      }

      else {
        this.searchIsOn = true;
        // this.searchSettings = [];
        console.log("searchOriginalSettings ", this.searchOriginalSettings);
        this.searchSettings = Object.values(this.searchOriginalSettings)
          .filter((item) => item.query.toLowerCase().includes(trimmedKeyLowerCase)
          || item.reply.toLowerCase().includes(trimmedKeyLowerCase)
          || item.meta.toLowerCase().includes(trimmedKeyLowerCase));
      }
      console.log(searchKey);

      console.log("in trimmedKeyLowerCase", trimmedKeyLowerCase);
      console.log("searchsettings ", this.searchSettings);
          this.inputSearchSettings = this.searchSettings;

    }
    else {
      this.inputSearchSettings = [];
      console.log("empty ", this.inputSearchSettings);
      if (this.platformList.size === 0) {
        this.searchIsOn = false;
        this.searchSettings = [];
        
      }
      else this.searchSettings = this.platformSettings;
    }
    // this.inputSearchSettings = this.searchSettings;
    console.log("onSearchOrders search settings ", this.searchSettings);
    console.log("onSearchOrders inut search ", this.inputSearchSettings);
  }

  onPlatformChecked($event: boolean, platformType) {
    const platform = platformType.name;
    platformType.selected = $event;
    this.searchIsOn = true;
    this.searchSettings = [];

    if ($event) {
      this.platformList.add(platform);
    } else {
      this.platformList.delete(platform);
    }

    console.log("platformList", this.platformList);

    console.log("inputSearchSettings ", this.inputSearchSettings);

    if (this.inputSearchSettings.length > 0) {
      if (this.platformList.size === 0) {
        this.searchSettings = this.inputSearchSettings;
      } else {
        for (const inputSearch of this.inputSearchSettings) {
          for (const filterPlatform of this.platformList) {
            const trimmedKeyLowerCase: string = filterPlatform.toLowerCase();
            this.platformSettings = (Object.values(this.searchOriginalSettings)
              .filter((item) => {
                return item.category.toLowerCase().includes(trimmedKeyLowerCase);
              }));
              this.searchSettings.push(...this.platformSettings);
              this.platformSettings = this.searchSettings;
            // for (const inputSearch of this.inputSearchSettings) {
            //   for (const filterPlatform of this.platformList) {
            //     if (inputSearch[filterPlatform] !== undefined && !this.data.includes(inputSearch)) {
            //       this.searchSettings.push(inputSearch);
            //     }
            //   }
            // }
          }
        }
      }
    } else {
      if (this.platformList.size === 0) {
        this.searchIsOn = false;
        console.log("zero ", this.searchIsOn);
      } else {
        this.platformSettings = [];
        console.log("searchOriginalSettings ", this.searchOriginalSettings);
        for (const filterPlatform of this.platformList) {
          console.log(filterPlatform);
          const trimmedKeyLowerCase: string = filterPlatform.toLowerCase();
          this.platformSettings = (Object.values(this.searchOriginalSettings)
            .filter((item) => {
              return item.category.toLowerCase().includes(trimmedKeyLowerCase);
            }));
          this.searchSettings.push(...this.platformSettings);
          this.platformSettings = this.searchSettings;
          console.log("platformSettings ", this.platformSettings);
        }
        // this.searchSettings = platformSettings[0];
        console.log(this.searchSettings, this.searchIsOn);
      }
    }
  }

  clearFilter() {
    this.platformList.clear();
    this.searchIsOn = false;
    this.searchSettings = [];
    this.inputSearchSettings = [];
    this.platformFilter.forEach(item => item.selected = false);

  }
}
