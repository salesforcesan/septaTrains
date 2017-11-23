({
	updateSchedule : function(component, event, helper) {
        // Load the upcoming timetable for the train.
        var action = component.get('c.getStationTimetable');
        var selection = component.get('v.selectedEntity');
        
        if (selection !== null) {
            action.setParam('station', component.get('v.selectedEntity'));
            action.setCallback(this, function(result) {
                var j = result.getReturnValue();
    
                if (j === null || j.error !== undefined) {
                    if (j === null) {
                        alert('An unknown error occurred');
                    } else {
                        alert(j.error);
                    }
                } else {
                    component.set('v.timetable', j.timetable);
                }            
            });
            
            $A.enqueueAction(action);
        }
	}
})