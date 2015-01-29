(function() {
    var jobs = {};
    var left = 0;

    var setImmediate = window.setImmediate || function(func) {
        // last resort (slow, not really immediate)
        setTimeout(func, 0);
    };

    var call = function() {
        // take one job from each category and execute it
        for (var category in jobs) {
            if (jobs.hasOwnProperty(category)) {
                var job = jobs[category][0];
                job.func.apply(job.context);

                // remove job from list
                jobs[category].shift(); // remove first element
                left--;
                if (jobs[category].length == 0) delete jobs[category];
            }
        }

        if (left > 0) {
            // start next delay
            setImmediate(call);
        }
    }

    var defer = function(func, context, category) {
        category = category || 'default';

        jobs[category] = jobs[category] || [];
        jobs[category].push({func: func, context: context});
        left++;

        if (left == 1) {
            // start first delay
            setImmediate(call);
        }
    }

    window.zerodelay = {
        defer: defer
    };
})();
