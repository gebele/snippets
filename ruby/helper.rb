# converts seconds to days, hours, minutes, seconds
def seconds_to_units(seconds)
  '%d days, %d hours, %d minutes, %d seconds' %
    [24,60,60].reverse.inject([seconds]) {|result, unitsize|
      result[0,0] = result.shift.divmod(unitsize)
      result
    }
end

# find hash in nested hash
class Hash
  def find_by_key(key, object=self, out=nil)
    if object.respond_to?(:key?) && object.key?(key)
      return object[key]
    elsif object.is_a? Enumerable
      object.find { |*a| out = find_by_key(key, a.last) }
      return out
    end
  end
end
