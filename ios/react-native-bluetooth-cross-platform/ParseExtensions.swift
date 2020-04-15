import Foundation

extension String {
  func getIndexOf(_ substring: String) -> Int? {
    let subLength = substring.count
    let length = self.count
    if(subLength > length) {
      return nil;
    }
    for i in 0..<(length - subLength) {
      let sample = self.substring(with: self.index(self.startIndex, offsetBy: i)..<self.index(self.startIndex, offsetBy: i + subLength))
      if substring == sample {
        return i
      }
    }
    return nil
  }
}
