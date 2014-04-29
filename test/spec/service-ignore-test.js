/*jshint undef: false */

describe('Service with an ignored state in conf', function() {

    beforeEach(function() {
        module('ncy-ignore-conf');
    });

    it('must be defined', inject(function($breadcrumb) {
        expect($breadcrumb).toBeDefined();
    }));

    it('should have a 3-step route to E state, skipping A.B.C', inject(function($breadcrumb) {
        goToState('A.B.C.E');
        var statesChain = $breadcrumb.getStatesChain();
        expect(stringifyStateChain(statesChain)).toBe('A --> A.B --> A.B.C.E');
    }));
});
