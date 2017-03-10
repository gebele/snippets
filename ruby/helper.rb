# converts seconds to days, hours, minutes, seconds
def seconds_to_units(seconds)
  '%d days, %d hours, %d minutes, %d seconds' %
    [24,60,60].reverse.inject([seconds]) {|result, unitsize|
      result[0,0] = result.shift.divmod(unitsize)
      result
    }
end
