import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Open Financial Technologies';
  public prdct_txt : string = "Products";
  public solution_txt : string = "Solutions";
  public pricing_txt : string = "Pricing";
  public login_txt : string = "Login";
  public get_started_txt : string = "Get Started";
  public super_txt : string = "We make it Super Simple";
  public eligibility_txt : string = "Eligibility Calculator";
  public monthly_income_txt : string = "Monthly Income";
  public mnthly_expense_txt : string = "Monthly Expense";
  public repayment_txt : string = "Repayment Tenure";
  public tenure_txt : string = "6 Months";
  public exist_loan_txt : string = "Do you have any existing loans?";
  public exixt_emi_txt : string = "EMI of existing loan (optional)";
  public loan_amnt_txt : string = "Loan Amount";
  public emi_txt : string = "Your EMI will be";
  public get_money_txt : string = "GET MONEY";
  public quick_cash_txt : string = "Quick cash disbursement";
  public term_loan_txt : string = "Get terms loans that your business needs within 72 hrs";
  public low_interest_txt : string = "Low-interest rate";
  public interest_rate_txt : string = "Achieve your financial goals with an amazing interest rate starting at 13% per annum";
  public zro_ppr_txt : string = "Zero Paperwork";
  public bank_statmnt_txt : string = "Get started instantly by submitting only your basic details & bank statements";
  public finances_txt : string = "Ace your business finances";
  public manage_bnkng_txt : string = "Manage banking, accounting & everything in between, on one platform";
  public covid_txt : string = "Loans to fight COVID-19";
  public zro_emi_txt : string = "Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh";
  public boost_business_txt : string = "Boost your business with Open";
  public get_hands_on_txt : string = "Get your hands on a term loan that’s crafted for your business";
  public open_acnt_txt: string = "Get an Open Account";
  public navStyle : any;
  public range1 : any;

  @HostListener('window:scroll') onScroll(e: Event): void {
    if(window.pageYOffset > 0){
      this.navStyle = {'background-color': '#FFFFFF','width': '1920px','height': '200px','margin': '-10px 0px 0px 0px'};
    }
    else{
      this.navStyle = {'background-color': 'transparent'};
    }
    
 }
 
}
