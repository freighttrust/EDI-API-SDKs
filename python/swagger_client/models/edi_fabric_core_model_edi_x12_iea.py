# coding: utf-8

"""
    EdiFabric API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class EdiFabricCoreModelEdiX12IEA(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'number_of_included_groups_1': 'str',
        'interchange_control_number_2': 'str'
    }

    attribute_map = {
        'number_of_included_groups_1': 'numberOfIncludedGroups_1',
        'interchange_control_number_2': 'interchangeControlNumber_2'
    }

    def __init__(self, number_of_included_groups_1=None, interchange_control_number_2=None):  # noqa: E501
        """EdiFabricCoreModelEdiX12IEA - a model defined in Swagger"""  # noqa: E501

        self._number_of_included_groups_1 = None
        self._interchange_control_number_2 = None
        self.discriminator = None

        if number_of_included_groups_1 is not None:
            self.number_of_included_groups_1 = number_of_included_groups_1
        if interchange_control_number_2 is not None:
            self.interchange_control_number_2 = interchange_control_number_2

    @property
    def number_of_included_groups_1(self):
        """Gets the number_of_included_groups_1 of this EdiFabricCoreModelEdiX12IEA.  # noqa: E501


        :return: The number_of_included_groups_1 of this EdiFabricCoreModelEdiX12IEA.  # noqa: E501
        :rtype: str
        """
        return self._number_of_included_groups_1

    @number_of_included_groups_1.setter
    def number_of_included_groups_1(self, number_of_included_groups_1):
        """Sets the number_of_included_groups_1 of this EdiFabricCoreModelEdiX12IEA.


        :param number_of_included_groups_1: The number_of_included_groups_1 of this EdiFabricCoreModelEdiX12IEA.  # noqa: E501
        :type: str
        """

        self._number_of_included_groups_1 = number_of_included_groups_1

    @property
    def interchange_control_number_2(self):
        """Gets the interchange_control_number_2 of this EdiFabricCoreModelEdiX12IEA.  # noqa: E501


        :return: The interchange_control_number_2 of this EdiFabricCoreModelEdiX12IEA.  # noqa: E501
        :rtype: str
        """
        return self._interchange_control_number_2

    @interchange_control_number_2.setter
    def interchange_control_number_2(self, interchange_control_number_2):
        """Sets the interchange_control_number_2 of this EdiFabricCoreModelEdiX12IEA.


        :param interchange_control_number_2: The interchange_control_number_2 of this EdiFabricCoreModelEdiX12IEA.  # noqa: E501
        :type: str
        """

        self._interchange_control_number_2 = interchange_control_number_2

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(EdiFabricCoreModelEdiX12IEA, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, EdiFabricCoreModelEdiX12IEA):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
