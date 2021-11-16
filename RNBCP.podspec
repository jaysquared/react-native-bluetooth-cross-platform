require 'json'
package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "RNBCP"
  s.version      = package['version']
  s.summary      = package['description']
  s.homepage     = "https://github.com/jaysquared/react-native-bluetooth-cross-platform"
  s.license      = "MIT"
  s.author       = package['author']
  s.platforms    = { :ios => "12.0" }
  s.source       = { :git => "https://github.com/jaysquared/react-native-bluetooth-cross-platform", :tag => "#{s.version}" }
  s.source_files = "ios/*.{h,m}"
  s.requires_arc = true

  s.dependency 'React-Core'
end
