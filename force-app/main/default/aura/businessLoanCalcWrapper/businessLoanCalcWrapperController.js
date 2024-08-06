({
    handleBusinessLoanChange : function(component, event) {
        /* when a business loan field changes, update the aura component attributes so that when passed back to the flow */
        let eventParams = event.getParams('detail');
        component.set("v.businessLoanRate", eventParams.rate);
        component.set("v.businessLoanYears", eventParams.years);
        component.set("v.businessLoanPrincipal", eventParams.principal);
    }
})
